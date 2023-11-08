import { IconButton, Stack } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Textarea from "@mui/joy/Textarea";
import * as React from "react";

import {
  FormatBoldRounded,
  FormatItalicRounded,
  FormatListBulletedRounded,
  SendRounded,
  StrikethroughSRounded,
} from "@mui/icons-material";

export type MessageInputProps = {
	textAreaValue: string;
	setTextAreaValue: (value: string) => void;
	onSubmit: () => void;
};

export default function MessageInput({
	textAreaValue,
	setTextAreaValue,
	onSubmit,
}: MessageInputProps) {
	const textAreaRef = React.useRef<HTMLDivElement>(null);
	const handleClick = () => {
		if (textAreaValue.trim() !== "") {
			onSubmit();
			setTextAreaValue("");
		}
	};
	return (
		<Box sx={{ px: 2, pb: 3 }}>
			<FormControl>
				<Textarea
					placeholder="Type something here…"
					aria-label="Message"
					ref={textAreaRef}
					onChange={(e) => {
						setTextAreaValue(e.target.value);
					}}
					value={textAreaValue}
					minRows={3}
					maxRows={10}
					endDecorator={
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							flexGrow={1}
							sx={{
								py: 1,
								pr: 1,
								borderTop: "1px solid",
								borderColor: "divider",
							}}
						>
							<div>
								<IconButton size="sm" variant="plain" color="neutral">
									<FormatBoldRounded />
								</IconButton>
								<IconButton size="sm" variant="plain" color="neutral">
									<FormatItalicRounded />
								</IconButton>
								<IconButton size="sm" variant="plain" color="neutral">
									<StrikethroughSRounded />
								</IconButton>
								<IconButton size="sm" variant="plain" color="neutral">
									<FormatListBulletedRounded />
								</IconButton>
							</div>
							<Button
								size="sm"
								color="primary"
								sx={{ alignSelf: "center", borderRadius: "sm" }}
								endDecorator={<SendRounded />}
								onClick={handleClick}
							>
								Send
							</Button>
						</Stack>
					}
					onKeyDown={(event) => {
						if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
							handleClick();
						}
					}}
					sx={{
						"& textarea:first-of-type": {
							minHeight: 72,
						},
					}}
				/>
			</FormControl>
		</Box>
	);
}
