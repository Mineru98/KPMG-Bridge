"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Home() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div style={{ height: "750px", width: "640px" }}>
          <Viewer
            fileUrl="https://arxiv.org/pdf/1706.03762.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </main>
  );
}
