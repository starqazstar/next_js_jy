export interface TestCase {
  name: string;
  description: string;
}

export interface PageGenerationRequest {
  description: string;
}

export interface PageGenerationResponse {
  success: boolean;
  data?: any;
  error?: {
    message: string;
  };
} 