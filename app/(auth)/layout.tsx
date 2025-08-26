import Image from "next/image";
import "../globals.css"
import Link from "next/link";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html>
            <body>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-accent/20 p-4">
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <Link href="/" className="inline-flex items-center space-x-2 mb-6">
                                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">R</span>
                                </div>
                                <span className="text-3xl font-bold text-gray-900">Readora</span>
                            </Link>
                            {/* <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-600">{subtitle}</p>
          )} */}
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg border-0 p-8">
                            {children}
                        </div>

                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-500">
                                By continuing, you agree to our{" "}
                                <Link href="/terms" className="text-primary hover:underline">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-primary hover:underline">
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}