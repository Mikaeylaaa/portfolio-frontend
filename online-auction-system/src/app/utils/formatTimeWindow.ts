// utils.ts

// Helper function to format the time window
export const formatTimeWindow = (hours: number, minutes: number): string => {
    // Convert time window hours and minutes to a formatted string
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  
    // Combine formatted hours and minutes and return the result
    return `${formattedHours}hrs ${formattedMinutes}mins`;
  };
  