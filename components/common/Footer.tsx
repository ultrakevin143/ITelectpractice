import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-gray-700 py-7">
            <div className="contatiner mx-auto px-6">
                <div className="flex justify-between">
                <div>
                    <h2>My Portfolion</h2>
                    <p>Cebu, City</p>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        <li><Link href="/">Blog 1</Link></li>
                        <li><Link href="/about">Blog 2</Link></li>
                        <li><Link href="/projects">Blog 3</Link></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col gap-2">
                        <li>Email: Nabunturan@gmail.com</li>
                        <li>Phone: 091122334422</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </div>
      </footer >
    )
}