import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/apples_smart_watch_ios-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.AGtKlWnOInmqNQI} scale={0.501} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.GXPSJdzybTrBefY} scale={0.501} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.PaletteMaterial001} scale={0.501} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.edhWAPEBZsqCLTg} scale={0.501} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.YtajTVWccmKRZBL} scale={0.501} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.vqobCvtAVyNLbeh} scale={0.501} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.JSFaTttTQosHtdR} scale={0.501} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.yXTwmSCvToGuMDP} scale={0.501} />
      <mesh geometry={nodes.Object_61.geometry} material={materials.yKAKXxwHUkGVYpC} scale={0.501} />
      <mesh geometry={nodes.Object_80.geometry} material={materials.boERCOkfaeYKPmb} scale={0.501} />
      <mesh geometry={nodes.Object_82.geometry} material={materials.IvaXKlaVZetAvuj} scale={0.501} />
      <mesh geometry={nodes.Object_88.geometry} material={materials.PaletteMaterial002} scale={0.501} />
      <mesh geometry={nodes.Object_90.geometry} material={materials.PaletteMaterial003} scale={0.501} />
      <mesh geometry={nodes.Object_95.geometry} material={materials.hSvQcziHKpXubDY} scale={0.501} />
    </group>
  )
}

useGLTF.preload('/apples_smart_watch_ios-transformed.glb')
