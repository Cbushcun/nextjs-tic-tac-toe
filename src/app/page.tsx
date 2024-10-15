import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RotateCcw, RefreshCw } from "lucide-react";

/* Component imports */
import Scoreboard from "@/components/ui/scoreboard";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
			<div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl">
				<h1 className="text-3xl font-bold text-center mb-6">Tic Tac Toe</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Game Board */}
					<div className="md:col-span-2">
						<div className="grid grid-cols-3 gap-2 aspect-square">
							{[...Array(9)].map((_, index) => (
								<button
									key={index}
									className="bg-gray-200 rounded-lg text-5xl font-bold flex items-center justify-center hover:bg-gray-300 transition-colors"
									aria-label={`Cell ${index + 1}`}
								/>
							))}
						</div>
					</div>

					{/* Sidebar */}
					<div className="flex flex-col gap-6">
						{/* Session Score */}
						<Scoreboard />
						{/* Move History */}
						<div className="flex-grow">
							<h2 className="text-xl font-semibold mb-2">Move History</h2>
							<ScrollArea className="h-48 rounded border p-2">
								<ol className="space-y-1">
									<li className="text-sm">1. Player X moved to (1, 1)</li>
									<li className="text-sm">2. Player O moved to (0, 0)</li>
									<li className="text-sm">3. Player X moved to (2, 2)</li>
								</ol>
							</ScrollArea>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col gap-2">
							<Button className="w-full" variant="outline">
								<RotateCcw className="w-4 h-4 mr-2" />
								Reset Game
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
