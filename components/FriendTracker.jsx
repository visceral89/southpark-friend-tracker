"use client";

import { useState, useEffect } from "react";
import allFriends from "../data/friends.json";

function FriendTracker() {
	const [checkedFriends, setCheckedFriends] = useState({});

	useEffect(() => {
		const storedFriends = localStorage.getItem("checkedFriends");
		if (storedFriends) {
			setCheckedFriends(JSON.parse(storedFriends));
		}
	}, []);

	const handleCheck = (friend) => {
		setCheckedFriends((prevState) => {
			const newState = { ...prevState, [friend]: !prevState[friend] };
			localStorage.setItem("checkedFriends", JSON.stringify(newState));
			return newState;
		});
	};

	// Count the number of checked friends
	const checkedFriendsCount =
		Object.values(checkedFriends).filter(Boolean).length;

	return (
		<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-4">
			<div className="md:flex">
				<div className="md:flex-shrink-0">
					{/* You can add an image or an icon here */}
				</div>
				<div className="p-8">
					<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
						South Park: The Stick of Truth - Friend Tracker
					</div>
					<h2 className="block mt-1 text-lg leading-tight font-medium text-black">
						{checkedFriendsCount}/{allFriends.length} Friends
					</h2>
					{allFriends.map((friend) => (
						<div key={friend} className="mt-2 text-black text-lg">
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									className="form-checkbox"
									checked={checkedFriends[friend] || false}
									onChange={() => handleCheck(friend)}
								/>
								<span className="ml-2">{friend}</span>
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default FriendTracker;
