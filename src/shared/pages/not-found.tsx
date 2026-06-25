import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>{
    useEffect(()=>{
        console.log("NotFound page mounted");
    }, []);
    
    return (
        <div className="bg-gradient min-h-screen flex items-center justify-center p-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-white/60 text-lg mb-6">Page Not Found</p>
                <Link to="/" className="inline-block bg-white/20 text-white px-4 py-2 rounded-md hover:bg-white/30 transition-colors">
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound;