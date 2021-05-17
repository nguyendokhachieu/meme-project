import "./style.css";

export default function Loading({
    opacity = 1,
}) 
{
    if (isNaN(opacity)) {
        opacity = 1;
    }

    return (
        <div 
            className="line-loading" 
            style={
                {
                    color: `rgba(74, 149, 241, ${ opacity })`
                }
            }
        >
        </div>
    );
}