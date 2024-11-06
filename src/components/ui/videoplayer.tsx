import React, { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Maximize,
  RotateCcw,
  FastForward,
  Settings
} from 'lucide-react';
import { Slider } from './slider';

interface VideoPlayerProps {
  src: string;
  className?: string;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onComplete?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  className = '',
  onTimeUpdate,
  onComplete
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  console.log(isFullscreen)

  // Format time to MM:SS
  const formatTime = (timeInSeconds: number): string => {
    const minutes: number = Math.floor(timeInSeconds / 60);
    const seconds: number = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Handle play/pause
  const togglePlay = (): void => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle volume change
  const handleVolumeChange = (newVolume: number): void => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  // Handle seeking
  const handleSeek = (newTime: number): void => {
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Handle fullscreen
  const toggleFullscreen = async (): Promise<void> => {
    try {
      if (!document.fullscreenElement) {
        await videoRef.current?.parentElement?.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  // Handle fast forward
  const handleFastForward = (): void => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  // Handle rewind
  const handleRewind = (): void => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = (): void => {
      setCurrentTime(video.currentTime);
      onTimeUpdate?.(video.currentTime, video.duration);
      
      // Check if video is complete
      if (video.currentTime >= video.duration) {
        onComplete?.();
      }
    };

    const handleLoadedMetadata = (): void => {
      setDuration(video.duration);
    };

    const handleFullscreenChange = (): void => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [onTimeUpdate, onComplete]);

  return (
    <Card className={`w-full max-w-4xl mx-auto overflow-hidden ${className}`}>
      <div className="relative aspect-video bg-black group">
        <video 
          ref={videoRef}
          className="w-full h-full"
          src={src}
          onClick={togglePlay}
        />
        
        {/* Custom Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity opacity-0 group-hover:opacity-100">
          <div className="space-y-2">
            {/* Progress bar */}
            <Slider
              value={[currentTime]}
              min={0}
              max={duration}
              step={1}
              className="w-full"
              
              onValueChange={(value: number[]): void => handleSeek(value[0])}
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Play/Pause */}
                <button 
                  onClick={togglePlay}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  type="button"
                >
                  {isPlaying ? 
                    <Pause className="lg:w-5 lg:h-5 sm:w-3 sm:h-3 text-white" /> : 
                    <Play className="lg:w-5 lg:h-5 sm:w-3 sm:h-3 text-white" />
                  }
                </button>
                
                {/* Rewind */}
                <button 
                  onClick={handleRewind}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  type="button"
                >
                  <RotateCcw className="lg:w-5 lg:h-5 sm:w-3 sm:h-3 text-white" />
                </button>
                
                {/* Fast Forward */}
                <button 
                  onClick={handleFastForward}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  type="button"
                >
                  <FastForward className="lg:w-5 lg:h-5 sm:w-3 sm:h-3 text-white" />
                </button>
                
                {/* Volume */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleVolumeChange(isMuted ? 1 : 0)}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    type="button"
                  >
                    {isMuted ? 
                      <VolumeX className="lg:w-5 lg:h-5 sm:w-3 sm:h-3 text-white" /> : 
                      <Volume2 className="lg:w-5 lg:h-5 sm:w-3 sm:h-3 text-white" />
                    }
                  </button>
                  <Slider
                   style={{
                    // Custom styles for the slider
                    '--slider-color': 'rgb(239, 68, 68)', // Red color (you can change this)
                  } as React.CSSProperties}
                    value={[volume]}
                    min={0}
                    max={1}
                    step={0.1}
                    className="w-20"
                    onValueChange={(value: number[]): void => handleVolumeChange(value[0])}
                  />
                </div>
                
                {/* Time */}
                <div className="text-white lg:text-sm sm:text-[10px] whitespace-nowrap">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Settings */}
                <button 
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  type="button"
                >
                  <Settings className="lg:w-5 lg:h-5 sm:w-3 sm:h-3 text-white" />
                </button>
                
                {/* Fullscreen */}
                <button 
                  onClick={toggleFullscreen}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  type="button"
                >
                  <Maximize className="lg:w-5 lg:h-5 sm:w-3 sm:h-3 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoPlayer;