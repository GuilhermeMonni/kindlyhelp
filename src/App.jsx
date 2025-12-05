import Header from "./components/Header"
import Container from "./components/Container"

function App(){
  
  return(
    <>
      <header><Header /></header>
      <main className="min-h-screen">
        <Container />
      </main>
        <footer className="w-full bg-deep text-gray-400 text-center py-6 text-sm mt-full">
            © 2025 KindlyHelp • Gravataí, RS • gmonni002@gmail.com
        </footer>
    </>
  )
}

export default App