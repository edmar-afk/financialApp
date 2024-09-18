/* eslint-disable react/prop-types */ /* eslint-disable react/no-unescaped-entities */ import * as React from "react";import Backdrop from "@mui/material/Backdrop";import Box from "@mui/material/Box";import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CommentQuizForm from "./CommentQuizForm";

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

export default function CommentModal({ userQuizId, name, answer, score, comment }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<p onClick={handleOpen}>Rated</p>
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
							<span className="font-bold text-purple-800">
								You rated {name} a whooping {score}/100
							</span>
						</Typography>
						<div className="text-2xl mt-4 font-semibold">
							<p className="text-sm font-extralight">
								His/Her answer: '<span className="font-bold">{answer}</span>'
							</p>
							<CommentQuizForm
								closeModal={handleClose}
								userQuizId={userQuizId}
								name={name}
								answer={answer}
								score={score}
								comment={comment}
							/>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
