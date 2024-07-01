//modules
import Link from "next/link";

const HomePage = () => {
    return (
        <>
            <h1>This is Homepage</h1>
            <Link href={'/about'}>About Page!</Link>
        </>
    )
}

export default HomePage;