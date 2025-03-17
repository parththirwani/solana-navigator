// utils/randomId.ts
/**
 * Generates a random ID with customizable length and character set
 * 
 * @param length Length of the generated ID
 * @param useNumbers Include numbers in the ID
 * @param useSpecialChars Include special characters in the ID
 * @returns A random string ID
 */
export function generateRandomId(length = 8, useNumbers = true, useSpecialChars = false): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '-_';
    
    let allChars = characters;
    if (useNumbers) allChars += numbers;
    if (useSpecialChars) allChars += specialChars;
    
    let result = '';
    const charactersLength = allChars.length;
    
    for (let i = 0; i < length; i++) {
      result += allChars.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
  }
  
  /**
   * Generates a timestamp-based ID with a random suffix
   * 
   * @param prefix Optional prefix for the ID
   * @param randomLength Length of the random part of the ID
   * @returns A timestamp-based ID with random suffix
   */
  export function generateTimestampId(prefix = '', randomLength = 4): string {
    const timestamp = Date.now().toString(36);
    const randomPart = generateRandomId(randomLength);
    
    return `${prefix}${timestamp}-${randomPart}`;
  }
  
  /**
   * Generates a UUID (v4)
   * 
   * @returns A UUID string
   */
  export function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  /**
   * Generates a short, URL-friendly ID
   * 
   * @param length Length of the generated ID
   * @returns A URL-friendly ID
   */
  export function generateShortId(length = 6): string {
    // Use a URL-friendly character set (no special chars that need encoding)
    const urlFriendlyChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    let result = '';
    const charactersLength = urlFriendlyChars.length;
    
    for (let i = 0; i < length; i++) {
      result += urlFriendlyChars.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
  }