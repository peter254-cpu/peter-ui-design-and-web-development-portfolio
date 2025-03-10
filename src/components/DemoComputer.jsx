/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useVideoTexture ,useTexture} from "@react-three/drei"


const DemoComputer = (props) => {
  const { nodes, materials } = useGLTF('/models/desktop_monitor_low-poly.glb')
  const monitortxt = useTexture('textures/desk/monitor.png');


  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.161, 0.717, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.144, 0.064, 0.144]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.screen}
        >
            <meshMatcapMaterial map={monitortxt} />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.Material}
        position={[-0.161, 0.721, 0]}
        scale={[0.063, 0.096, 0.096]}
      />
    </group>
  )
}

useGLTF.preload('/models/desktop_monitor_low-poly.glb')
export default DemoComputer