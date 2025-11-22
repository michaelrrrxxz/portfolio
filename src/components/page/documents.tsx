import { useState, type FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  KeyRound,
  ShieldCheck,
  FolderOpen,
  FileArchive,
} from "lucide-react";

export default function Documents() {
  const [password, setPassword] = useState<string>("");
  const [access, setAccess] = useState<boolean>(false);

  const currentMonth: string = new Date()
    .toLocaleString("en-US", { month: "long" })
    .toLowerCase();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === currentMonth) {
      setAccess(true);
    } else {
      alert("Incorrect password");
    }
  };

  // -------------------------
  // PASSWORD SCREEN
  // -------------------------
  if (!access) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
        <Card className="w-full max-w-sm shadow-lg p-6">
          <CardContent className="flex flex-col items-center">
            <KeyRound className="w-12 h-12 mb-4 text-black" />
            <h2 className="text-2xl font-bold mb-4 text-center">
              Enter Password
            </h2>

            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                placeholder="e.g. 12345678"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-3 py-2 rounded-md mb-4"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md font-semibold hover:opacity-90"
              >
                Enter
              </button>
            </form>
          </CardContent>
        </Card>
      </section>
    );
  }

  // -------------------------
  // DOCUMENTS LIST
  // -------------------------
  const documents = [
    {
      label: "PhilHealth",
      value: "05-250650431-7",
      icon: ShieldCheck,
    },
    {
      label: "SSS",
      value: "35-4125484-6",
      icon: FileText,
    },
    {
      label: "Pag-IBIG",
      value: "121375954372",
      icon: FolderOpen,
    },
    {
      label: "Download My ID PDF",
      value: "docs.pdf",
      icon: FileArchive,
      isPdf: true,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white">
      <h1 className="text-3xl font-bold mb-10 text-center">My Documents</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {documents.map((doc) => (
          <Card
            key={doc.label}
            className="flex flex-col items-center py-8 shadow-lg"
          >
            <CardContent className="flex flex-col items-center text-center">
              <doc.icon className="w-10 h-10 mb-3 text-black" />

              {doc.isPdf ? (
                <a
                  href={`/${doc.value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-lg font-semibold"
                >
                  Open PDF
                </a>
              ) : (
                <span className="text-2xl font-bold">{doc.value}</span>
              )}

              <span className="text-gray-600 mt-2 text-sm">{doc.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-gray-700 text-center max-w-xl">
        These are your personal documents stored securely and only accessible
        with the monthly password.
      </p>
    </section>
  );
}
