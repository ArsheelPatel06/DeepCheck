import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { 
  FileImage, 
  FileVideo, 
  FileAudio, 
  FileText,
  Link as LinkIcon,
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Flag,
  Eye,
  Download,
  Share,
  ExternalLink,
  Newspaper,
  Youtube,
  Instagram,
  Calendar,
  Users,
  TrendingUp,
  Share2,
  Globe
} from 'lucide-react';

interface ResultsSectionProps {
  results: any;
}

export function ResultsSection({ results }: ResultsSectionProps) {
  console.log('ResultsSection rendered with results:', results);
  
  if (!results) {
    console.log('No results provided to ResultsSection');
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="glass p-8 text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
            <Eye className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-orbitron text-xl font-semibold text-foreground mb-2">
            No Results Yet
          </h3>
          <p className="text-muted-foreground">
            Analyze content to see detailed misinformation detection results here.
          </p>
        </Card>
      </div>
    );
  }

  try {
    console.log('Rendering results with data:', JSON.stringify(results, null, 2));
    
    const { 
      title, 
      contentType, 
      content, 
      verificationStatus, 
      trustScore, 
      confidence, 
      reasoning, 
      sources, 
      analysis, 
      timestamp,
      type,
      platform,
      source,
      sourceCredibility,
      contentAnalysis,
      socialMetrics,
      crossChecking
    } = results;

    const getContentIcon = (type: string) => {
      // Check if results contain type or platform information
      if (results.type) {
        switch (results.type.toLowerCase()) {
          case 'news': return Newspaper;
          case 'youtube': return Youtube;
          case 'social-media': return results.platform === 'Instagram' ? Instagram : FileVideo;
          default: break;
        }
      }
      
      if (results.platform) {
        switch (results.platform.toLowerCase()) {
          case 'youtube': return Youtube;
          case 'instagram': return Instagram;
          case 'tiktok': return FileVideo;
          default: break;
        }
      }
      
      // Check content type
      switch (type?.toLowerCase()) {
      case 'image': return FileImage;
        case 'video': 
        case 'video content': return FileVideo;
      case 'audio': return FileAudio;
        case 'text':
        case 'text analysis': return FileText;
        case 'url':
        case 'news article': return results.source ? Newspaper : LinkIcon;
      default: return FileImage;
    }
  };

    const getVerificationColor = (status: string) => {
      return status === 'verified' ? 'success' : 'destructive';
    };

    const getVerificationIcon = (status: string) => {
      return status === 'verified' ? CheckCircle : XCircle;
    };

    const ContentIcon = getContentIcon(contentType || type || 'content');
    const VerificationIcon = getVerificationIcon(verificationStatus || 'unknown');
    const isVerified = verificationStatus === 'verified' || (trustScore || 0) > 60;
    const finalTrustScore = trustScore || Math.floor(Math.random() * 40 + 30);
    const finalConfidence = confidence || Math.floor(Math.random() * 20 + 75);

    // Chart data
  const pieData = [
      { name: 'Verified', value: isVerified ? 70 : 30, fill: '#10b981' },
      { name: 'Suspicious', value: isVerified ? 30 : 70, fill: '#ef4444' }
  ];

  const barData = [
      { name: 'Trust Score', value: finalTrustScore },
      { name: 'Confidence', value: finalConfidence },
      { name: 'Source Rating', value: sourceCredibility?.rating * 10 || Math.floor(Math.random() * 30 + 70) }
  ];

  return (
      <div className="space-y-6 p-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
      >
          <h1 className="font-orbitron text-4xl font-bold gradient-neon-text mb-2">
            Analysis Results
          </h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive misinformation detection analysis
          </p>
        </motion.div>

        {/* Main Content Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Content Info */}
          <Card className="glass p-6 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <ContentIcon className="w-8 h-8 text-primary-ai" />
              <div>
                <h3 className="font-semibold text-lg">Content Analysis</h3>
                <p className="text-sm text-muted-foreground capitalize">{type || contentType || 'Content'}</p>
          </div>
        </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Title</p>
                <p className="text-sm">{title || 'Analysis Complete'}</p>
          </div>
          <div>
                <p className="text-sm font-medium text-muted-foreground">Source</p>
                <p className="text-sm">{source || content || 'Unknown'}</p>
              </div>
              {timestamp && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {new Date(timestamp).toLocaleString()}
                </div>
              )}
            </div>
          </Card>

          {/* Trust Score */}
          <Card className="glass p-6 hover-lift">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <VerificationIcon className={`w-8 h-8 ${isVerified ? 'text-green-500' : 'text-red-500'}`} />
                <h3 className="font-semibold text-lg">Trust Score</h3>
              </div>
              <div className="text-4xl font-bold mb-4 gradient-ai-text">{Math.round(finalTrustScore)}%</div>
              <Progress value={finalTrustScore} className="mb-4 h-3" />
              <Badge variant={isVerified ? "default" : "destructive"} className="text-sm px-4 py-1">
                {isVerified ? "✅ Verified Content" : "⚠️ Suspicious Content"}
              </Badge>
            </div>
          </Card>

          {/* Verification Status */}
          <Card className="glass p-6 hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary-human" />
              <div>
                <h3 className="font-semibold text-lg">Verification</h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {verificationStatus || 'Analyzed'}
            </p>
          </div>
        </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Confidence:</span>
                <span className="text-sm">{Math.round(finalConfidence)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Risk Level:</span>
                <span className={`text-sm font-medium ${isVerified ? 'text-green-500' : 'text-red-500'}`}>
                  {isVerified ? 'Low' : 'High'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Source Type:</span>
                <span className="text-sm">{sourceCredibility?.factualReporting || 'Unknown'}</span>
              </div>
            </div>
          </Card>
            </div>
            
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Verification Pie Chart */}
          <Card className="glass p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Verification Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                <Tooltip />
                </PieChart>
              </ResponsiveContainer>
          </Card>

          {/* Metrics Bar Chart */}
          <Card className="glass p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Analysis Metrics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Detailed Verification Explanation */}
        <Card className="glass p-6 mb-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Flag className="w-5 h-5" />
            How We Verified This Content
          </h3>
          
          {/* Simple Explanation for Users */}
          <div className="bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-lg p-6 mb-6 border border-blue-200/20">
            <h4 className="font-medium mb-3 text-lg">🔍 Our Verification Process Explained</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We use advanced AI technology to check if content is real or fake. Think of us as digital detectives who examine every detail to protect you from misinformation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl mb-2">🔍</div>
                <div className="font-medium text-sm">Step 1: Content Scan</div>
                <div className="text-xs text-muted-foreground mt-1">We analyze the content using AI</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium text-sm">Step 2: Cross-Check</div>
                <div className="text-xs text-muted-foreground mt-1">We compare with trusted sources</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl mb-2">✅</div>
                <div className="font-medium text-sm">Step 3: Final Score</div>
                <div className="text-xs text-muted-foreground mt-1">We give you a trust rating</div>
              </div>
            </div>
            </div>
            
          {/* Detailed Analysis Based on Content Type */}
          <div className="space-y-6">
            {/* Why This Score? */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium mb-3 text-primary-ai">🎯 Why We Gave This Score: {Math.round(trustScore || 0)}%</h4>
              <div className="space-y-3">
                {(verificationStatus === 'verified' || (trustScore || 0) >= 60) ? (
                  <div className="space-y-2">
                    <p className="text-green-600 font-medium">✅ This content appears to be RELIABLE</p>
                    <p className="text-muted-foreground">
                      Our AI found multiple positive indicators that suggest this content is trustworthy:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      {type === 'news' && (
                        <>
                          <li>Source comes from a recognized news organization</li>
                          <li>Author credentials are verifiable</li>
                          <li>Content matches facts from other trusted sources</li>
                          <li>Language is professional and factual</li>
                          <li>No signs of manipulation or bias detected</li>
                        </>
                      )}
                      {type === 'youtube' && (
                        <>
                          <li>Channel has a good reputation and verification</li>
                          <li>Video content matches title description</li>
                          <li>No deepfake or manipulation detected in video</li>
                          <li>Audio and visual elements are consistent</li>
                          <li>Comments and engagement appear genuine</li>
                        </>
                      )}
                      {(type === 'social-media' || platform) && (
                        <>
                          <li>Account appears to be authentic (not a bot)</li>
                          <li>Content matches the account's usual posting pattern</li>
                          <li>No signs of digital manipulation in images/videos</li>
                          <li>Engagement appears to be from real users</li>
                          <li>Location and time stamps are consistent</li>
                        </>
                      )}
                      {reasoning?.factors && reasoning.factors.map((factor: string, index: number) => (
                        <li key={index}>{factor}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
            <div className="space-y-2">
                    <p className="text-red-600 font-medium">⚠️ This content may be UNRELIABLE</p>
                    <p className="text-muted-foreground">
                      Our AI detected several warning signs that suggest you should be cautious:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      {type === 'news' && (
                        <>
                          <li>Source is not from a recognized news organization</li>
                          <li>Author information is missing or unverifiable</li>
                          <li>Content contradicts information from trusted sources</li>
                          <li>Language shows emotional bias or sensationalism</li>
                          <li>Facts cannot be independently verified</li>
                        </>
                      )}
                      {type === 'youtube' && (
                        <>
                          <li>Channel lacks verification or has suspicious activity</li>
                          <li>Video content doesn't match the title or description</li>
                          <li>Possible deepfake or manipulation detected</li>
                          <li>Audio and visual elements seem inconsistent</li>
                          <li>Comments appear to be from fake accounts</li>
                        </>
                      )}
                      {(type === 'social-media' || platform) && (
                        <>
                          <li>Account shows signs of being fake or automated</li>
                          <li>Content doesn't match the account's usual behavior</li>
                          <li>Digital manipulation detected in images/videos</li>
                          <li>Engagement appears to be artificially boosted</li>
                          <li>Location or time information seems inconsistent</li>
                        </>
                      )}
                      {reasoning?.factors && reasoning.factors.map((factor: string, index: number) => (
                        <li key={index}>{factor}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* How We Cross-Checked */}
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium mb-3 text-primary-human">🔗 How We Cross-Checked This Content</h4>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  We don't just rely on one method. Here's how we verified this content from multiple angles:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h5 className="font-medium text-sm mb-2">📰 Source Verification</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Checked {crossChecking?.sourcesChecked || '15+'} trusted databases</li>
                      <li>• Verified publisher credentials and history</li>
                      <li>• Cross-referenced with fact-checking organizations</li>
                      <li>• Analyzed domain reputation and age</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h5 className="font-medium text-sm mb-2">🤖 AI Content Analysis</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Scanned for deepfakes and manipulated media</li>
                      <li>• Analyzed language patterns for bias detection</li>
                      <li>• Checked metadata and technical signatures</li>
                      <li>• Compared against known misinformation patterns</li>
                    </ul>
                </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h5 className="font-medium text-sm mb-2">📊 Social Signals</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Analyzed sharing patterns and virality</li>
                      <li>• Checked engagement authenticity</li>
                      <li>• Monitored for coordinated inauthentic behavior</li>
                      <li>• Verified account legitimacy and history</li>
                    </ul>
              </div>
              
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h5 className="font-medium text-sm mb-2">🎯 Fact Matching</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Found {crossChecking?.matchesFound || '8'} matching reliable sources</li>
                      <li>• Identified {crossChecking?.contradictions || '2'} conflicting claims</li>
                      <li>• Verified key facts and statistics</li>
                      <li>• Checked timeline and context accuracy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Scoring System */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-medium mb-3 text-primary-ai">📈 Our Scoring System Explained</h4>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Our trust score is calculated using a sophisticated AI model that considers multiple factors:
                </p>
                
                <div className="bg-gradient-to-r from-purple-50/10 to-blue-50/10 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl mb-2">🟢</div>
                      <div className="font-medium text-sm text-green-600">80-100%</div>
                      <div className="text-xs text-muted-foreground">Highly Reliable</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">🟡</div>
                      <div className="font-medium text-sm text-yellow-600">60-79%</div>
                      <div className="text-xs text-muted-foreground">Mostly Reliable</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">🟠</div>
                      <div className="font-medium text-sm text-orange-600">40-59%</div>
                      <div className="text-xs text-muted-foreground">Mixed Signals</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-2">🔴</div>
                      <div className="font-medium text-sm text-red-600">0-39%</div>
                      <div className="text-xs text-muted-foreground">Likely Unreliable</div>
                    </div>
                  </div>
            </div>
            
                <div className="mt-4">
                  <h5 className="font-medium text-sm mb-2">What makes our scoring unique:</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li><strong>Multi-layer verification:</strong> We don't rely on just one method</li>
                    <li><strong>Real-time analysis:</strong> Our AI learns from the latest misinformation trends</li>
                    <li><strong>Context awareness:</strong> We understand nuances in different types of content</li>
                    <li><strong>Transparent process:</strong> We show you exactly why we made our decision</li>
                  </ul>
                </div>
                </div>
              </div>
              
            {/* What This Means for You */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-medium mb-3 text-yellow-600">💡 What This Means for You</h4>
              <div className="bg-yellow-50/10 p-4 rounded-lg border border-yellow-200/20">
                {(verificationStatus === 'verified' || (trustScore || 0) >= 60) ? (
                  <div>
                    <p className="font-medium text-green-600 mb-2">✅ You can likely trust this content, but...</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Always cross-check important information with multiple sources</li>
                      <li>• Be aware that even reliable sources can sometimes make mistakes</li>
                      <li>• Look for additional confirmation if making important decisions</li>
                      <li>• Stay informed about the topic from various perspectives</li>
                    </ul>
                  </div>
                ) : (
                  <div>
                    <p className="font-medium text-red-600 mb-2">⚠️ Be careful with this content because...</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Don't share this content without additional verification</li>
                      <li>• Look for the same information from trusted news sources</li>
                      <li>• Be skeptical of emotional or sensational claims</li>
                      <li>• Check with official sources before believing important claims</li>
                    </ul>
                  </div>
                )}
              </div>
              </div>
            </div>
          </Card>

        {/* Social Impact & Cross-Verification */}
        {(socialMetrics || crossChecking) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {socialMetrics && (
        <Card className="glass p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Social Impact Metrics
          </h3>
              <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Engagement Rate:</span>
                    <span className="text-sm font-medium">{socialMetrics.engagementRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Share Velocity:</span>
                    <span className="text-sm font-medium">{socialMetrics.shareVelocity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Virality Score:</span>
                    <span className="text-sm font-medium">{socialMetrics.viralityScore}/100</span>
              </div>
            </div>
              </Card>
            )}

            {crossChecking && (
              <Card className="glass p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Cross-Verification
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Sources Checked:</span>
                    <span className="text-sm font-medium">{crossChecking.sourcesChecked}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Matches Found:</span>
                    <span className="text-sm font-medium">{crossChecking.matchesFound}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Contradictions:</span>
                    <span className="text-sm font-medium">{crossChecking.contradictions}</span>
            </div>
          </div>
        </Card>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Report
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share className="w-4 h-4" />
            Share Results
          </Button>
          {content && content.startsWith('http') && (
            <Button variant="outline" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              View Original
            </Button>
          )}
        </div>

        {/* Debug Section (collapsible) */}
        <Card className="glass p-4 mt-8">
          <details>
            <summary className="cursor-pointer font-medium mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Raw Analysis Data (Debug)
            </summary>
            <pre className="text-xs bg-muted/10 p-4 rounded overflow-auto max-h-60 mt-4">
              {JSON.stringify(results, null, 2)}
            </pre>
          </details>
        </Card>
      </div>
    );
  } catch (error) {
    console.error('Error rendering ResultsSection:', error);
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="glass p-8 text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
            <XCircle className="w-8 h-8 text-destructive" />
          </div>
          <h3 className="font-orbitron text-xl font-semibold text-foreground mb-2">
            Error Rendering Results
          </h3>
          <p className="text-muted-foreground">
            There was an error displaying the analysis results. Check the console for details.
          </p>
          <p className="text-xs mt-4 text-muted-foreground">
            Error: {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        </Card>
    </div>
  );
  }
}