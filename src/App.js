
function App() {
  const Tg=()=>{
   let btn= document.documentElement.classList.toggle('dark');
   console.log(btn);
  }

  return (
    <div className=" dark:bg-black bg-red-500 font-bold" >
      shaharia

      <button className="px-5 py-2 bg-green text-white" onClick={Tg}>Toggle</button>
    </div>
    
  );
}

export default App;
