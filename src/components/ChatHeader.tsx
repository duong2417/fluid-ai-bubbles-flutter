
import { Info } from "lucide-react";
import { FluidAI } from "./FluidAI";

export function ChatHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      {/* Status bar simulation */}
      <div className="status-bar flex items-center justify-between p-2 text-sm">
        <span>23:55</span>
        <div className="flex items-center space-x-2">
          <span>🔋 97%</span>
        </div>
      </div>

      {/* App header */}
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-b-3xl shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FluidAI className="mr-4" />
            <div>
              <h1 className="text-xl font-bold text-blue-900">AI Lingo Talk</h1>
              <p className="text-blue-600 text-sm">Voice chat assistant</p>
            </div>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-ai-blue">
            <Info size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
