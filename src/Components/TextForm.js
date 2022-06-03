import React, {useState} from 'react'

export default function TextForm(props) {
    const upperCase = ()=>{
        setnewText(text.toUpperCase());
        // props.showAlert("Set to Uppercase", "success");
    }
    const lowerCase = ()=>{
        setnewText(text.toLowerCase());
        // props.showAlert("Set to Lowercase", "success");
    }
    const inverseCase = ()=>{
        let tempText = "";
        let char = '';
        for (var i = 0; i < text.length; i++) {
            char = text.charAt(i);
            if(char === char.toUpperCase()){
                tempText = tempText.concat(char.toLowerCase())
            }
            else {
                tempText = tempText.concat(char.toUpperCase())
            }
        };
        setnewText(tempText);
        // props.showAlert("Case inverted", "success");
    }
    const remExSpace = ()=>{
        console.log("Remove extra space was hit");
        setnewText(text.replace(/\s+/g, " ").trim());
    }
    const clearText = ()=>{
        setnewText("");
        setText("");
        // props.showAlert("Text cleared", "success");
    }
    const copyText = ()=>{
        let text = document.getElementById('mybox2');
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Copied to clipboard", "success");
    }

    const selectText = ()=>{
        var text = document.getElementById('mybox1');
        text.select();
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const doNothing = ()=>{}

    const [text, setText] = useState("Enter your text here");
    const [newtext, setnewText] = useState("");
    return (
        <div className="main-container" style={props.style}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Original Text</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} onClick={selectText} id="mybox1" rows="3" style={{backgroundColor: props.mode==='light'?'white':'rgb(31 39 68)', color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-1 my-1`} onClick={upperCase}>Uppercase</button>
            <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-1 my-1`} onClick={lowerCase}>Lowercase</button>
            <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-1 my-1`} onClick={inverseCase}>Inverse case</button>
            <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-1 my-1`} onClick={remExSpace}>Remove Extra Space</button>
            <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-1 my-1`} onClick={clearText}>Clear</button>
            <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-1 my-1`} onClick={copyText}>Copy to Clipboard</button>
            <div className="mb-3 my-2">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">New Text</label>
                <textarea className="form-control" value={newtext} onChange={doNothing} id="mybox2" rows="3" style={{backgroundColor: props.mode==='light'?'white':'rgb(31 39 68)', color: props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className={`btn btn-${props.mode==='light'?'light':'dark'} mx-1 my-1`} onClick={copyText}>Copy Text</button>
            <div className="my-2">
                <h3>Text Summary</h3>
                <p>Text has {text.trim().length==0?0:text.replace(/\s+/g, " ").trim().split(" ").length} words and {text.length} characters</p>
                <p>{0.008*(text.split(" ").length -1)} minutes to read</p>
                <h3>Preview</h3>
                <p>{newtext}</p>
            </div>
        </div>
    )
}
