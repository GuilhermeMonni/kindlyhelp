import Header from "./components/Header"
import Container from "./components/Container"
import PopupInitial from "./components/PopupInitial"

function App(){
  
  return(
    <>
      <header><Header /></header>
      <main>
        <Container />
        <PopupInitial />
      </main>
      <footer className="w-full bg-deep text-gray-400 text-center py-6 text-sm">
        © 2025 KindlyHelp • Gravataí, RS • gmonni002@gmail.com
      </footer>
    </>
  )
}

export default App