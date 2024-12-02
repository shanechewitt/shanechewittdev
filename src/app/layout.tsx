import Navbar from '@/components/layout/Navbar';
import './globals.css';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-source-code-pro',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={sourceCodePro.variable}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
