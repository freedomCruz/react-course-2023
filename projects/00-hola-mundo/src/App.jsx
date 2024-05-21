import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'



export function App() {
    

    return (
        <section className = "App">
            <TwitterFollowCard  userName="elonmusk" >
                Pablo Figueroa
            </TwitterFollowCard>
            
            <TwitterFollowCard userName="midudev" > 
                Miguel Ángel Durán 
            </TwitterFollowCard> 

            <TwitterFollowCard  userName="willycruzdo" > 
                Elon Musk
            </TwitterFollowCard>

        </section>
    )
    
}

