import Link from 'next/link';

function Sobre() {
    return <div>
        <h1>Sobre</h1>
        <Link href="/sobre">
            <a>Acessar página Home</a>
        </Link>
    </div>
}

export default Sobre;