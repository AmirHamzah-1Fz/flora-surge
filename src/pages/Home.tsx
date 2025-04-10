import ChatBot from "../components/ChatBot"
import About from "../components/home/About"
import Hero from "../components/home/Hero"
import Profile from "../components/home/Profile"

function Home() {
  return (
    <>
        <Hero />
        <About />
        <Profile />
        <ChatBot />
    </>
  )
}

export default Home