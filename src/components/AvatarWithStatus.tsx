import Avatar, { AvatarProps } from "@mui/joy/Avatar";
import Badge from "@mui/joy/Badge";

type AvatarWithStatusProps = AvatarProps & {
	online?: boolean;
};

export default function AvatarWithStatus({
	online = false,
	...rest
}: AvatarWithStatusProps) {
	return (
		<div>
			<Badge
				color={online ? "success" : "neutral"}
				variant={online ? "solid" : "soft"}
				size="sm"
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				badgeInset="4px 4px"
			>
				<Avatar size="sm" {...rest} />
			</Badge>
		</div>
	);
}
