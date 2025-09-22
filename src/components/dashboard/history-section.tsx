import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface HistoryItem {
  id: string;
  title: string;
  content: string;
  contentType: string;
  type: 'news' | 'youtube' | 'social-media' | 'upload';
  platform?: string;
  verificationStatus: 'verified' | 'suspicious';
  trustScore: number;
  confidence: number;
  timestamp: string;
  reasoning?: {
    primary: string;
    factors: string[];
  };
  sourceCredibility?: {
    rating: number;
    factualReporting: string;
    bias: string;
  };
  crossChecking?: {
    sourcesChecked: number;
    matchesFound: number;
    contradictions: number;
    factCheckerConsensus: string;
  };
  riskAssessment?: {
    overallRisk: 'Low' | 'Medium' | 'High';
    details: string;
  };
}

// Helper functions for history management
const HISTORY_STORAGE_KEY = 'deepcheck_analysis_history';

const getStoredHistory = (): HistoryItem[] => {
  try {
    const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading history from localStorage:', error);
    return [];
  }
};

const saveHistory = (history: HistoryItem[]) => {
  try {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Error saving history to localStorage:', error);
  }
};

export const addToHistory = (item: Omit<HistoryItem, 'id' | 'timestamp'>) => {
  console.log('addToHistory called with:', item);
  
  const newItem: HistoryItem = {
    ...item,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
  };
  
  console.log('New history item created:', newItem);
  
  const currentHistory = getStoredHistory();
  console.log('Current history before adding:', currentHistory.length, 'items');
  
  const updatedHistory = [newItem, ...currentHistory].slice(0, 100); // Keep only last 100 items
  saveHistory(updatedHistory);
  
  console.log('History updated, new length:', updatedHistory.length);
  
  // Trigger a storage event for cross-tab communication
  window.dispatchEvent(new StorageEvent('storage', {
    key: HISTORY_STORAGE_KEY,
    newValue: JSON.stringify(updatedHistory),
    storageArea: localStorage
  }));
  
  return newItem;
};

export function HistorySection() {
  console.log('HistorySection component rendering');
  
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Load history on component mount
  useEffect(() => {
    try {
      const loadedHistory = getStoredHistory();
      console.log('Loading history on mount:', loadedHistory.length, 'items');
      setHistory(loadedHistory);
    } catch (error) {
      console.error('Error in useEffect:', error);
      setHistory([]);
    }
  }, []);

  console.log('HistorySection rendering with', history.length, 'items');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Verification History</h1>
      <p className="mb-4">History items: {history.length}</p>
      
      <Button 
        onClick={() => {
          console.log('Raw localStorage data:', localStorage.getItem(HISTORY_STORAGE_KEY));
          console.log('Parsed history:', getStoredHistory());
          console.log('Current state:', history);
        }}
        className="mb-4"
      >
        Debug History
      </Button>
      
      <Button 
        onClick={() => {
          addToHistory({
            title: "Test Item - " + new Date().toLocaleTimeString(),
            content: "https://example.com/test",
            contentType: "url",
            type: "news",
            verificationStatus: "verified",
            trustScore: 85,
            confidence: 90
          });
          setHistory(getStoredHistory());
        }}
        className="ml-4 mb-4"
      >
        Add Test Item
      </Button>
      
      {history.length === 0 ? (
        <Card className="p-6">
          <p>No history items yet. Click "Add Test Item" to test the functionality.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {history.map(item => (
            <Card key={item.id} className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">Trust Score: {item.trustScore}%</p>
              <p className="text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleString()}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}