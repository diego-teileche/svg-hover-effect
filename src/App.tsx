import { CheckIcon, CircleStackIcon } from "@heroicons/react/16/solid"
import Dt from "./components/DT"
import { useRef, useState } from "react"

function App() {
	const cardsRef = useRef<HTMLElement>(null)
	const [cursor, setCursor] = useState({ x: 0, y: 0 })
	const [mouseOnCard, setMouseOnCard] = useState(false)

	const handleMouseMove = (
		event: React.MouseEvent<HTMLElement, MouseEvent>
	) => {
		if (cardsRef.current !== null) {
			const rect = cardsRef.current.getBoundingClientRect()
			const x = event.clientX - rect.left
			const y = event.clientY - rect.top

			setCursor({ x: x, y: y })
		}
	}

	return (
		<main className="w-full h-screen flex place-items-center justify-center">
			<section
				className="card"
				ref={cardsRef}
				onMouseEnter={() => setMouseOnCard(true)}
				onMouseLeave={() => setMouseOnCard(false)}
				onMouseMove={(event) => handleMouseMove(event)}
			>
				<div className="flex flex-col w-2/5 justify-between">
					<div className="flex flex-col gap-3">
						<CircleStackIcon className="w-14 rounded-lg bg-neutral-950/70 stroke-sky-500 p-1 shadow-inner" />
						<h1 className="font-sans text-neutral-200 tracking-wide text-sm">
							Database
						</h1>
						<p className="-mt-2 text-xs font-sans text-neutral-500 tracking-wide">
							Every project is a full Postgres database, the world's most
							trusted relational database.
						</p>
					</div>
					<div className="flex flex-col font-sans text-neutral-200 tracking-wide text-xs">
						<span className="flex flex-row gap-2">
							<CheckIcon className="w-5 text-green-600" />
							<p>100% portable</p>
						</span>
						<span className="flex flex-row gap-2">
							<CheckIcon className="w-5 text-green-600" />
							<p>Built-in Auth with RLS</p>
						</span>
						<span className="flex flex-row gap-2">
							<CheckIcon className="w-5 text-green-600" />
							<p>Easy to extend</p>
						</span>
					</div>
				</div>
				<div className="w-3/5 flex flex-col place-items-center">
					<Dt cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
				</div>
			</section>
		</main>
	)
}

export default App
