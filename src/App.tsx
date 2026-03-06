import { useState } from "react";
import FlowEditor from "./components/FlowEditor";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("editor");

  return (
    <main className="app">
      <header className="app-header">
        <h1>Creator Center</h1>
        <nav className="app-nav">
          <button
            className={activeTab === "editor" ? "active" : ""}
            onClick={() => setActiveTab("editor")}
          >
            Node Editor
          </button>
          <button
            className={activeTab === "templates" ? "active" : ""}
            onClick={() => setActiveTab("templates")}
          >
            Templates
          </button>
          <button
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </nav>
      </header>
      <div className="app-content">
        {activeTab === "editor" && <FlowEditor />}
        {activeTab === "templates" && (
          <div className="templates-panel">
            <h2>创作模板</h2>
            <div className="template-grid">
              <div className="template-card">
                <h3>文章创作</h3>
                <p>结构化文章写作流程</p>
              </div>
              <div className="template-card">
                <h3>视频脚本</h3>
                <p>短视频脚本模板</p>
              </div>
              <div className="template-card">
                <h3>音乐创作</h3>
                <p>歌曲结构与节拍</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "settings" && (
          <div className="settings-panel">
            <h2>设置</h2>
            <p>Coming soon...</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
