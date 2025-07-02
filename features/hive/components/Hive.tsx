import React, { useEffect, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import MaskedView from '@react-native-masked-view/masked-view';
import { useEvent } from 'expo';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useVideoPlayer, VideoSource, VideoView } from 'expo-video';
import { svgPathProperties } from 'svg-path-properties';

import { colors } from '@/constants';
import { useStreak } from '@/shared/streak';
const assetId = require('@/assets/videos/hive.mp4');

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Hive = () => {
    const { currentMilestoneProgress } = useStreak();
    const router = useRouter();

    const wrapperRef = useRef<View>(null);
    const [svgWidth, setSvgWidth] = useState(0);
    const [svgHeight, setSvgHeight] = useState(0);

    const definition = 'M140 310L10.0962 235V85L140 10L269.904 85V235L140 310Z';
    const definitionProperties = new svgPathProperties(definition);
    const totalLength = definitionProperties.getTotalLength();

    const progressValue = useSharedValue(0);

    const measureWrapper = () => {
        if (!wrapperRef.current) return;
        wrapperRef.current.measure((_x, _y, width, height) => {
            setSvgWidth(width);
            setSvgHeight(height);
        });
    };

    const videoSource: VideoSource = {
        assetId: assetId,
        metadata: {
            title: 'Big Buck Bunny',
            artist: 'The Open Movie Project',
        },
    };

    const player = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
        player.play();
    });

    useEvent(player, 'playingChange', { isPlaying: player.playing });

    const handleFailure = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        router.push('/failure');
    };

    useEffect(() => {
        progressValue.value = withTiming(currentMilestoneProgress, { duration: 500 });
    }, [currentMilestoneProgress, progressValue]);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: totalLength * (1 - progressValue.value),
    }));

    return (
        <Pressable
            onLayout={() => measureWrapper()}
            ref={wrapperRef}
            className="flex-1 items-center justify-center relative"
            onLongPress={handleFailure}
        >
            <MaskedView
                style={{
                    height: svgHeight,
                    width: svgWidth,
                    position: 'absolute',
                }}
                maskElement={
                    <Svg width={svgWidth} height={svgHeight} viewBox="0 0 280 320" fill="none">
                        <Path
                            d={definition}
                            stroke={colors.background.white}
                            fill={colors.background.section}
                            strokeWidth={20}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />
                    </Svg>
                }
            >
                <View className="w-full h-full items-center justify-center bg-[#D5FFD9]">
                    <VideoView player={player} style={{ height: '85%', width: '85%' }} />
                </View>
            </MaskedView>
            <Svg width={svgWidth} height={svgHeight} viewBox="0 0 280 320" fill="none">
                <Path
                    d={definition}
                    stroke={colors.background.white}
                    strokeWidth={20}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
                <AnimatedPath
                    d={definition}
                    animatedProps={animatedProps}
                    stroke={colors.primary.DEFAULT}
                    fill="none"
                    strokeWidth={20}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeDasharray={totalLength}
                />
            </Svg>
        </Pressable>
    );
};

export default Hive;
