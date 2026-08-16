import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const JSONparser = ({ json }) => {
    let entries = Object.entries(json);

    const objectHandler = (value, level) => {
        let obj = Object.entries(value);
        return (
            <div className="">
                  <div>
                <span className="text-gray-400">{`{`}</span>
            </div>
                {obj.map(([key, value], index) => {
                    return (
                        <span key={index} className="block px-6 border-l border-gray-700">

                            <span className="text-blue-400">{`"${key}"`}</span>
                            <span> : </span>
                            <span className="text-amber-400">
                                {typeof value === "string"
                                // for link 
                                    ? value.startsWith("http") ?
                                            <Link to={value}  target="_blank" className="text-blue-800 underline">
                                            {`${value}`}
                                        </Link>  
                                    : 
                                    `"${value}"`


                                    : typeof value === "object" ?
                                        objectHandler(value)
                                        : String(value)}
                            </span>
                            {","}
                        </span>
                    )
                })}
                <div>
                    <span className="text-gray-400">{`}`}</span><span className="text-gray-400">{`,`}</span>
                </div>
            </div>
        )
    }

    let line =1;
    const printNumber = (obj) => {
        return (
            <div className="flex flex-col text-gray-500 mr-4 select-none">
                 <span className="w-8 text-right">{line++}</span>
                {Object.entries(obj).map(([key, value], index) => (
                    <div className="flex flex-col" key={key}>
                        <span className="w-8 text-right">{line++}</span>

                        {value !== null && typeof value === "object" && (
                            <>
                                <span className="w-8 text-right">{line++}</span>
                                {printNumber(value)}
                                <span className="w-8 text-right">{line++}</span>
                            </>
                        )}
                             
                    </div>
                ))}
                 {/* <span className="w-8 text-right">{line++}</span> */}
            </div>
        );
    };
    return (
        <div className="flex font-mono text-sm leading-7 p-4">
            {/* Line Numbers */}
          { printNumber(json)}

            {/* JSON Content */}
            <div className="flex flex-col flex-1">
                <div>
                    <span className="text-gray-400">{`{`}</span>
                </div>

                <div className="flex flex-col border-l border-gray-700">
                    {entries.map(([key, value], index) => (
                        <span key={key} className="px-6">
                            <span className="text-blue-400">{`"${key}"`}</span>
                            <span> : </span>

                            {typeof value === "object" ? (
                                objectHandler(value, index + 1)
                            ) : typeof value === "string" ? (

                                // for link 
                                     value.startsWith("http") ?
                                           ( <Link to={value}  target="_blank" className="text-blue-800 underline">
                                            {`${value}`}
                                        </Link>  
                                           )
                                    : 
                                <span  className="text-amber-400">
                                    {`${value}`}
                                    <span className="text-gray-400">,</span>
                                </span>
                            ) : typeof value === "number" ? (
                                <span className="text-orange-400">
                                    {value}
                                    <span className="text-gray-400">,</span>
                                </span>
                            ) : (
                                <span className="text-orange-400">
                                    {String(value)}
                                    <span className="text-gray-400">,</span>
                                </span>
                            )}
                        </span>
                    ))}
                </div>

                <div>
                    <span className="text-gray-400">{`}`}</span>
                </div>
            </div>
        </div>
    )
}
