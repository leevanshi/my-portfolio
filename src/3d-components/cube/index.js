import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

import useStore from '../../context/mainStore';
import useSetColor from './hooks/useSetColor';
import Page from './components/Page';

import model from '~/src/assets/cube.glb';
const profilePicture = process.env.PUBLIC_URL + '/pictures/profile-picture.jpg';

const START_POINT = 0.69;

function Box(props) {
  const { setFloatingCamera } = useStore((store) => store);
  const { scene, nodes, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();
  const parent = useRef();

  useSetColor(nodes);

  useEffect(() => {
    // Load profile picture as texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(profilePicture, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      
      // Apply texture to cube faces
      if (nodes['Cube002'] && nodes['Cube002'].children) {
        nodes['Cube002'].children.forEach((face) => {
          if (face.material) {
            face.material.map = texture;
            face.material.needsUpdate = true;
          }
        });
      }
    });

    animations.forEach((animation) => {
      void (actions[animation.name].play().paused = true);
    });
  }, [actions, animations, nodes]);

  useFrame((state, delta) => {
    const offset = scroll.range(START_POINT, 0.4);
    const cubeCapTransparencyOffset = scroll.range(START_POINT, 0.2);
    const visibleRange = scroll.range(0.9, 0.1);

    //set up the opacity for head component
    nodes['Cube002'].children.map(
      (face) => (face.material.opacity = 1 - cubeCapTransparencyOffset)
    );

    animations.forEach((animation) => {
      const action = actions[animation.name];
      actions[animation.name].time = THREE.MathUtils.damp(
        action.time,
        action.getClip().duration * offset,
        100,
        delta
      );
    });
  });

  return (
    <group>
      <primitive
        ref={parent}
        onClick={() => {
          setFloatingCamera(false);
        }}
        scale={[12, 12, 12]}
        object={scene}
        {...props}
      />
      {/* <Page /> */}
    </group>
  );
}

export default Box;