import React from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "./button";

interface ScoreboardProps {
	scoreRed?: number;
	scoreBlue?: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ scoreRed, scoreBlue }) => {
	return (
		<div className="rounded-lg p-4 flex flex-col text-black">
			<h2 className="text-xl font-semibold mb-2 text-center">Score</h2>
			<div className="flex relative gap-2">
				<div className="flex flex-col bg-red-500 rounded rounded-r-none flex-grow py-1">
					<span className="text-red-200 text-center">X</span>
					<span className="text-2xl font-bold text-center">
						{scoreRed ? scoreRed : 0}
					</span>
				</div>
				<Button
					variant={"secondary"}
					className="absolute top-1/2 left-1/2 origin-center transform -translate-x-1/2 -translate-y-1/2 outline outline-gray-100"
				>
					<RefreshCw />
				</Button>
				<div className="flex flex-col bg-blue-500 rounded rounded-l-none flex-grow py-1">
					<span className="text-blue-200 text-center">O</span>
					<span className="text-2xl font-bold text-center">
						{scoreBlue ? scoreBlue : 0}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Scoreboard;
