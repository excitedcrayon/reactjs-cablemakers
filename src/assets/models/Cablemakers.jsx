/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 cablemakers.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Cablemakers(props) {
  const { nodes, materials } = useGLTF('/cablemakers.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-5.046, 1, 27.23]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh geometry={nodes.Text_1.geometry} material={nodes.Text_1.material} position={[-167.896, 17.24, 14.048]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_2.geometry} material={nodes.Text_2.material} position={[-129.524, 17.24, 8.113]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_3.geometry} material={nodes.Text_3.material} position={[-92.819, 17.24, 15]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_4.geometry} material={nodes.Text_4.material} position={[-67.444, 17.24, 15.317]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_5.geometry} material={nodes.Text_5.material} position={[-42.037, 17.24, 8.113]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_6.geometry} material={nodes.Text_6.material} position={[3.364, 17.24, 8.43]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_7.geometry} material={nodes.Text_7.material} position={[49.48, 17.24, 8.113]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_8.geometry} material={nodes.Text_8.material} position={[85.884, 17.24, 15.317]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_9.geometry} material={nodes.Text_9.material} position={[117.67, 17.24, 8.113]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_10.geometry} material={nodes.Text_10.material} position={[146.726, 17.24, 8.43]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Text_11.geometry} material={nodes.Text_11.material} position={[173.243, 17.24, 8.113]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
        <directionalLight intensity={0.7} decay={2} rotation={[-1.905, -0.06, 1.55]} />
        {/* <PerspectiveCamera makeDefault={false} far={100000} near={70} fov={10} position={[-484.492, -5.433, 35.123]} rotation={[-1.837, -1.48, -1.838]} /> */}
        <PerspectiveCamera makeDefault={true} far={100000} near={70} fov={30} position={[-484.492, -5.433, 35.123]} rotation={[-1.837, -1.48, -1.838]} />
      </group>
    </group>
  )
}

useGLTF.preload('/cablemakers.gltf')
