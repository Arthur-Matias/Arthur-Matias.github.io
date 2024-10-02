interface QuoteProps{
    phrase: string;
    author: string;
}

export default function Quote({author, phrase}:QuoteProps){

    return (
        <blockquote className="w-auto px-24">
            <p className="font-title font-bold text-5xl">{phrase}</p>
            <footer className="flex justify-end">
                <cite className="flex items-center text-3xl font-display mt-5">
                    <div className="w-3 h-1 bg-blue-700 mr-2"></div>
                    {author}
                </cite>
            </footer>
        </blockquote>
    )
}