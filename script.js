const addItem = async(item)=>{
    await randomDelay()
    let div = document.createElement("div")
    div.innerHTML = item
    document.body.append(div)
}


const randomDelay =()=>{
    return new Promise((resolve, reject)=>{
        timeout = 1 +Math.random()*6;
        setTimeout(() => {
            resolve()
        }, timeout*1000);
    })
}
async function main(){
        let text = ["Initializing Hacking",
        "Initializesd Hacking now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all password and personal files to Serve",
        "Cleaning up"]
        for (const item of text) {
            await addItem(item)
             
      let x =  setInterval(() => {
            let last = document.body.lastElementChild;
            
            if(last.innerHTML.endsWith(".....")){
                last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 5)
    
            } else{
                last.innerHTML = last.innerHTML + "."
            }
            
        
        }, 200);
    }
    await randomDelay()
    clearInterval(x)
        
    }

main()