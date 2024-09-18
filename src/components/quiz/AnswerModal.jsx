/* eslint-disable react/prop-types */ /* eslint-disable react/no-unescaped-entities */ import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

import AnswerQuizForm from "./AnswerQuizForm";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	maxHeight: "90vh",
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	overflowY: "auto",
};

export default function AnswerModal({ userQuizId, name, answer }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<p onClick={handleOpen}>Rate</p>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<Typography
							id="transition-modal-title"
							variant="h6"
							component="h2">
							<span className="font-bold text-purple-800">{name}'s answer to your Quiz</span>
						</Typography>
						<div className="text-2xl mt-4 font-semibold">
							{answer}
							<AnswerQuizForm
								closeModal={handleClose}
								userQuizId={userQuizId}
								name={name}
								answer={answer}
							/>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
