/* eslint-disable react/no-unescaped-entities */
import * as React from "react";import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import AddQuizForm from "./AddQuizForm";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	maxHeight: "80vh",
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	overflowY: "auto",
};

export default function AddQuizModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<p onClick={handleOpen}>Add Quiz</p>
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
							Add Quiz
						</Typography>
						<div className="text-xs">
							Hello Advisor, Let's create a quiz to help users improve their financial knowledge in a fun and
							interactive way, covering key topics like budgeting, investing, and saving.
							<AddQuizForm closeModal={handleClose} />
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}
