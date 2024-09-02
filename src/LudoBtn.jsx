function LudoBtn({title,btnName, increaseCount, count}){
console.log("count");

    return(
        <>

        <div >
             <p>{title} <span>count : {count}</span></p>
            <button style={{backgroundColor: btnName}} onClick={increaseCount}>{btnName}</button>
        </div>
        </>
    )
}
export default LudoBtn;