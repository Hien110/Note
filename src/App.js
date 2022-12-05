import { useState, useRef, useEffect } from "react";

function App() {
  // let vitri;
  // const [isStar, setIsStar] = useState (false)
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState({
    title: "",
    content: "",
  });
  const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem('noteList')) ?? []);
  // console.log(inputValue.content);
  useEffect(() => {
    localStorage.setItem('noteList', JSON.stringify(noteList))
  })
  const handleAdd = (e) => {
    // setInputValue({
    //   ...inputValue,
    //   title: e.target.value
    // })
    // setInputValue({
    //   ...inputsValue,
    //   content: e.target.value
    // })
    if (inputValue.title === ""){
      alert ("Please enter the title");
    } else if (inputValue.content === ""){
      alert ("Please enter the content")
    }
    else{
    setNoteList([...noteList, inputValue]);
    inputRef.current.focus();
       setInputValue({
        title:"",
        content: ""
    })
  }
} 
  const handleDelete =  (index) => {
    setNoteList(noteList.filter((value, id) => id !== index))
  }
  const handleStar = (index) => {
      // vitri = index;
  //     if (vitri === 0 ){
  //       setNoteList(...noteList, inputValue);
  //       setIsStar(!isStar);
  //       console.log("1234");
  //     }
  //  else {
  //   setNoteList(...noteList, inputValue);
  //   setIsStar(isStar);
  // // }
  //       if (vitri === 0 ){
  //         return{
  //      ...noteList
  //      log
  //         }
  //     }
  //  else {
  //  return {
  //   ...noteList
  //  }
  // }
}
  const handleEnter = (e) =>{
    if (e.code === "Enter"){
      handleAdd();
    }
}
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
       <div className=" h-[290px] w-[550px] bg-white rounded-xl m-auto mb-5 p-5  ">
        <h1 className="text-center font-bold mb-2 text-xl">
        Note
        </h1>
        <div className="flex flex-col w-[500px]">

          <input 
          type="text"
          placeholder="Enter Title ..." 
          className="border-[1px] border-[#3A5A9F] rounded-lg py-1 pr-2 pl-2 text-lg mb-5 w-full outline-[#6A5AF9]"
          onChange={(e) => setInputValue ({
            ...inputValue,
            title: e.target.value
          })}
          onKeyDown = {(e) => handleEnter(e)}
          ref = {inputRef}
          value = {inputValue.title}
          ></input>

          <input 
          type="text"
          placeholder="Enter Content ..." 
          className="border-[1px] border-[#3A5A9F] rounded-lg py-1 pr-2 pl-2 text-lg mb-5 w-full h-20 outline-[#6A5AF9]"
          onChange={(e) => setInputValue({
            ...inputValue,
            content: e.target.value
          })}
          onKeyDown = {(e) => handleEnter(e)}
          value = {inputValue.content}
          ></input>

        </div>
        <div className="text-center m-3">

        <button className="inline-block px-12 py-2 rounded-lg bg-[#6A5AF9] hover:bg-orange-400 font-medium" 
        onClick={handleAdd}
        >Create</button> 

        </div>
       </div>
       <div className="flex flex-wrap justify-center">
        ' {noteList.map((value, index) => (
        <div className="m-2">
        <div className="w-[200px] bg-white rounded-lg " >
          <div className="font-bold text-center">{value.title}</div>
          <div className="m-2">{value.content}</div>
          
          <div className="grid grid-cols-2">
          <button className="text-center  bg-red-500 text-white font-medium w-full h-full rounded-l-lg p-2 hover:text-black"
          onClick={() => handleDelete (index)}>
          <i class="fa-solid fa-trash"></i>
          </button>

          <button className=  "text-center bg-yellow-500 text-white font-medium w-full h-full rounded-r-lg p-2 " 
          
          onClick={ () => handleStar(index)}
          >
          <i class="fa-solid fa-star"></i>
          </button>
        
          </div>
          </div>
          </div>
       ))}' :
       
 
       </div>
    </div>
    
  );
}

export default App;
