const Button = () => {

    const handleClick = () => {
        alert("Paral Topi Luffy!");
    };
    
    return(
        <button type="button" className="" onClick={handleClick()}>
            More
        </button>
    );
};

export {Button};