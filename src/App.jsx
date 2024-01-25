import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {Watch} from "./components/Watch";
import "./App.css";

function App() {
  return (
    <>
    
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 95 }}>
        <ambientLight intensity={2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={5}
          shadow-mapSize={2048}
          castShadow
        />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 2]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Watch
           
          />
        </PresentationControls>
        <ContactShadows
          position={[0, -4, 0]}
          opacity={0.75}
          scale={10}
          blur={3}
          far={4}
        />
        <Environment preset="city"/>
      </Canvas>
    </>
  );
}

export default App;
