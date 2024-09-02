/* eslint-disable react/prop-types */ /* eslint-disable react/no-unescaped-entities */ import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function VideoModal({ name, url }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>
				<PlayCircleOutlineOutlinedIcon
					className="text-purple-200 ml-4"
					fontSize="large"
				/>
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={style}>
					<p>
						You're viewing <span className="font-bold text-purple-700">{name}</span>
					</p>
					<Box mt={2}>
						<iframe
							className="w-full rounded-lg"
							src={`https://www.youtube.com/embed/${url}`}
                            width="100%"
                            height={350}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen></iframe>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
