import AvatarViewer from './components/AvatarViewer';
import FaceTracker from './components/FaceTracker';

function App() {
  return (
    <div
      className="w-screen h-screen bg-black overflow-hidden relative"
      style={{ backgroundColor: 'oklch(14.1% 0.005 285.823)' }}>
      <div className="flex items-center justify-center w-full h-full px-4">
        <div className="w-full h-auto max-w-[90vw] md:max-w-[70vw] max-h-[100vh] aspect-[9/7]">
          <AvatarViewer />
        </div>
      </div>

      <div className="absolute bottom-2 right-2">
        <FaceTracker />
      </div>
    </div>
  );
}

export default App;
