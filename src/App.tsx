import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import Header from "./components/Header";
import MyMessages from "./components/MyMessages";
import Sidebar from "./components/Sidebar";

export default function JoyMessagesTemplate() {
	return (
		<CssVarsProvider disableTransitionOnChange>
			<CssBaseline />
			<Box sx={{ display: "flex", minHeight: "100dvh" }}>
				<Sidebar />
				<Header />
				<Box component="main" className="MainContent" sx={{ flex: 1 }}>
					<MyMessages />
				</Box>
			</Box>
		</CssVarsProvider>
	);
}
