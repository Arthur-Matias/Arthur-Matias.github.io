import Text from "./Text";

interface QuoteProps{
    phrase: string;
    author: string;
}

export default function Quote({author, phrase}:QuoteProps){

    return (
        <blockquote className="w-full px-5 md:px-24">
            <Text text={phrase} font="title" size="lg" weight="bold" mainColor={false} />
            {/* <Title text={phrase} size="lg" font="title" weight="thin" mainColor={false} /> */}
            <footer className="flex justify-end">
                <cite className="flex items-center font-display text-2xl mt-5">
                    <div className="w-3 h-1 background-main mr-2"></div>
                    <Text text={author} font="display" size="md" weight="thin" mainColor={false} />
                    {/* <Title font="display" weight="bold" mainColor={false} size="lg" text={author} /> */}
                </cite>
            </footer>
        </blockquote>
    )
}