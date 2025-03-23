import React, { useState } from 'react';

// Define device preset types
type DevicePreset = {
  name: string;
  width: number | string;
  height: number | string;
};

// Define device presets for responsive testing
const devicePresets: DevicePreset[] = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Desktop', width: 1440, height: 900 },
];

type PreviewFrameProps = {
  htmlContent: string;
};

const PreviewFrame: React.FC<PreviewFrameProps> = ({ htmlContent }) => {
  const [selectedDevice, setSelectedDevice] = useState<DevicePreset>(devicePresets[0]);
  const [customWidth, setCustomWidth] = useState<string>('375');
  const [customHeight, setCustomHeight] = useState<string>('667');

  // Handle device selection
  const handleDeviceSelect = (device: DevicePreset) => {
    setSelectedDevice(device);
    setCustomWidth(device.width.toString());
    setCustomHeight(device.height.toString());
  };

  // Handle custom dimension changes
  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = e.target.value;
    setCustomWidth(newWidth);

    // Update the selected device with new dimensions
    const parsedWidth = parseInt(newWidth) || 0;
    setSelectedDevice(prev => ({
      name: 'Custom',
      width: parsedWidth,
      height: prev.height,
    }));
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = e.target.value;
    setCustomHeight(newHeight);

    // Update the selected device with new dimensions
    const parsedHeight = parseInt(newHeight) || 0;
    setSelectedDevice(prev => ({
      name: 'Custom',
      width: prev.width,
      height: parsedHeight,
    }));
  };

  // Get iframe style based on selected device
  const getIframeStyle = () => {
    return {
      width:
        typeof selectedDevice.width === 'number'
          ? `${selectedDevice.width}px`
          : selectedDevice.width,
      height:
        typeof selectedDevice.height === 'number'
          ? `${selectedDevice.height}px`
          : selectedDevice.height,
      margin: '0 auto',
      overflow: 'auto',
    };
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex-1 flex flex-col overflow-auto">
      {/* Device controls bar */}
      <div className="bg-gray-100 dark:bg-gray-700 py-3 px-4 border-b border-gray-200 dark:border-gray-600 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-medium text-gray-800 dark:text-white mr-4">Preview</h2>
          {/* Device selector pills */}
          <div className="flex space-x-2">
            {devicePresets.map(device => (
              <button
                key={device.name}
                onClick={() => handleDeviceSelect(device)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedDevice.name === device.name
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500'
                }`}
              >
                {device.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={customWidth}
              onChange={handleWidthChange}
              className="w-16 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm"
              placeholder="Width"
            />
            <span className="text-gray-400">×</span>
            <input
              type="text"
              value={customHeight}
              onChange={handleHeightChange}
              className="w-16 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm"
              placeholder="Height"
            />
          </div>
        </div>
      </div>

      {/* Content frame */}
      <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-900 overflow-auto flex items-center justify-center">
        <div className="relative" style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'auto' }}>
          <iframe
            srcDoc={htmlContent}
            style={getIframeStyle()}
            className="rounded border border-gray-200 dark:border-gray-700 bg-white shadow-md"
            title="AI Generated Design"
            sandbox="allow-scripts"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewFrame;
