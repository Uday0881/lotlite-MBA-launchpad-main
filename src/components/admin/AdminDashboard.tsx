import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import { SiteContent, Partner, Stat, Feature, SandboxTimelineItem, SandboxPortfolio, CurriculumSemester, ScheduleItem, Pillar, Outcome, Testimonial, AdmissionsStep, BlogPost, FAQ } from '@/types/cms';
import { initialSiteContent } from '@/data/siteContent';
import { ReorderableList } from './ReorderableList';

export function AdminDashboard() {
  const [content, setContent] = useState<SiteContent>(initialSiteContent);

  const handleSave = () => {
    console.log("Saving new content payload:", JSON.stringify(content, null, 2));
    alert("Changes saved to console! Check your developer tools.");
  };

  const updateGlobalSettings = (key: keyof SiteContent['globalSettings'], value: any) => {
    setContent(prev => ({ ...prev, globalSettings: { ...prev.globalSettings, [key]: value } }));
  };

  const updateHero = (key: keyof SiteContent['hero'], value: string) => {
    setContent(prev => ({ ...prev, hero: { ...prev.hero, [key]: value } }));
  };

  const generateId = () => Math.random().toString(36).substr(2, 9);

  return (
    <div className="container mx-auto py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CMS Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage the content and structure of the website.</p>
        </div>
        <Button onClick={handleSave} size="lg">
          <Save className="w-4 h-4 mr-2" /> Save Changes
        </Button>
      </div>

      <Tabs defaultValue="global" className="flex flex-col md:flex-row gap-6">
        <TabsList className="flex flex-col h-auto items-start w-full md:w-64 space-y-1 bg-transparent border-r rounded-none p-0 pr-4">
          <TabsTrigger value="global" className="w-full justify-start data-[state=active]:bg-muted">Global Settings</TabsTrigger>
          <TabsTrigger value="hero" className="w-full justify-start data-[state=active]:bg-muted">Hero Section</TabsTrigger>
          <TabsTrigger value="partners" className="w-full justify-start data-[state=active]:bg-muted">Partners</TabsTrigger>
          <TabsTrigger value="stats" className="w-full justify-start data-[state=active]:bg-muted">Stats</TabsTrigger>
          <TabsTrigger value="features" className="w-full justify-start data-[state=active]:bg-muted">Features</TabsTrigger>
          <TabsTrigger value="sandbox" className="w-full justify-start data-[state=active]:bg-muted">Sandbox</TabsTrigger>
          <TabsTrigger value="curriculum" className="w-full justify-start data-[state=active]:bg-muted">Curriculum</TabsTrigger>
          <TabsTrigger value="schedule" className="w-full justify-start data-[state=active]:bg-muted">Schedule</TabsTrigger>
          <TabsTrigger value="pillars" className="w-full justify-start data-[state=active]:bg-muted">Pillars</TabsTrigger>
          <TabsTrigger value="outcomes" className="w-full justify-start data-[state=active]:bg-muted">Outcomes</TabsTrigger>
          <TabsTrigger value="testimonials" className="w-full justify-start data-[state=active]:bg-muted">Testimonials</TabsTrigger>
          <TabsTrigger value="admissions" className="w-full justify-start data-[state=active]:bg-muted">Admissions</TabsTrigger>
          <TabsTrigger value="blogs" className="w-full justify-start data-[state=active]:bg-muted">Blogs</TabsTrigger>
          <TabsTrigger value="faq" className="w-full justify-start data-[state=active]:bg-muted">FAQ</TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-x-hidden">
          {/* Global Settings */}
          <TabsContent value="global" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Global Settings</CardTitle>
                <CardDescription>Manage top-level navigation and branding.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Logo URL</Label>
                  <Input value={content.globalSettings.logoUrl} onChange={(e) => updateGlobalSettings('logoUrl', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Top Banner Alert</Label>
                  <Input value={content.globalSettings.topBannerAlert} onChange={(e) => updateGlobalSettings('topBannerAlert', e.target.value)} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hero Section */}
          <TabsContent value="hero" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>The main banner at the top of the homepage.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Main Heading</Label>
                  <Input value={content.hero.mainHeading} onChange={(e) => updateHero('mainHeading', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Sub Heading</Label>
                  <Textarea value={content.hero.subHeading} onChange={(e) => updateHero('subHeading', e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>CTA Text</Label>
                    <Input value={content.hero.ctaText} onChange={(e) => updateHero('ctaText', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label>CTA URL</Label>
                    <Input value={content.hero.ctaUrl} onChange={(e) => updateHero('ctaUrl', e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Background Image/Video URL</Label>
                  <Input value={content.hero.backgroundMediaUrl} onChange={(e) => updateHero('backgroundMediaUrl', e.target.value)} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Corporate Partners */}
          <TabsContent value="partners" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Corporate Partners</h2>
            <ReorderableList<Partner>
              items={content.partners}
              onItemsChange={(items) => setContent(prev => ({ ...prev, partners: items }))}
              defaultNewItem={() => ({ id: generateId(), name: '', logoUrl: '' })}
              addButtonText="Add Partner"
              renderItem={(item, index, updateItem) => (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Partner Name</Label>
                    <Input value={item.name} onChange={(e) => updateItem({ ...item, name: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Logo URL</Label>
                    <Input value={item.logoUrl} onChange={(e) => updateItem({ ...item, logoUrl: e.target.value })} />
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* Stats */}
          <TabsContent value="stats" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <ReorderableList<Stat>
              items={content.stats}
              onItemsChange={(items) => setContent(prev => ({ ...prev, stats: items }))}
              defaultNewItem={() => ({ id: generateId(), label: '', value: '' })}
              addButtonText="Add Statistic"
              renderItem={(item, index, updateItem) => (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Label (e.g., Average CTC)</Label>
                    <Input value={item.label} onChange={(e) => updateItem({ ...item, label: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Value (e.g., 18L+)</Label>
                    <Input value={item.value} onChange={(e) => updateItem({ ...item, value: e.target.value })} />
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* Features */}
          <TabsContent value="features" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Life at Lotlite (Features)</h2>
            <ReorderableList<Feature>
              items={content.features}
              onItemsChange={(items) => setContent(prev => ({ ...prev, features: items }))}
              defaultNewItem={() => ({ id: generateId(), title: '', description: '', icon: '' })}
              addButtonText="Add Feature"
              renderItem={(item, index, updateItem) => (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input value={item.title} onChange={(e) => updateItem({ ...item, title: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Icon Name/URL</Label>
                      <Input value={item.icon} onChange={(e) => updateItem({ ...item, icon: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea value={item.description} onChange={(e) => updateItem({ ...item, description: e.target.value })} />
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* Sandbox */}
          <TabsContent value="sandbox" className="mt-0 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Sandbox Timeline</h2>
              <ReorderableList<SandboxTimelineItem>
                items={content.sandbox.timeline}
                onItemsChange={(items) => setContent(prev => ({ ...prev, sandbox: { ...prev.sandbox, timeline: items } }))}
                defaultNewItem={() => ({ id: generateId(), timeframe: '', description: '' })}
                addButtonText="Add Timeline Item"
                renderItem={(item, index, updateItem) => (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Timeframe (e.g., Week 12)</Label>
                      <Input value={item.timeframe} onChange={(e) => updateItem({ ...item, timeframe: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Input value={item.description} onChange={(e) => updateItem({ ...item, description: e.target.value })} />
                    </div>
                  </div>
                )}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Sandbox Portfolios</h2>
              <ReorderableList<SandboxPortfolio>
                items={content.sandbox.portfolios}
                onItemsChange={(items) => setContent(prev => ({ ...prev, sandbox: { ...prev.sandbox, portfolios: items } }))}
                defaultNewItem={() => ({ id: generateId(), title: '', tags: [], description: '', imageUrl: '' })}
                addButtonText="Add Portfolio"
                renderItem={(item, index, updateItem) => (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Project Title</Label>
                        <Input value={item.title} onChange={(e) => updateItem({ ...item, title: e.target.value })} />
                      </div>
                      <div className="space-y-2">
                        <Label>Tags (comma separated)</Label>
                        <Input 
                          value={item.tags.join(', ')} 
                          onChange={(e) => updateItem({ ...item, tags: e.target.value.split(',').map(t => t.trim()) })} 
                          placeholder="e.g. Finance, Tech"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea value={item.description} onChange={(e) => updateItem({ ...item, description: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Image URL</Label>
                      <Input value={item.imageUrl} onChange={(e) => updateItem({ ...item, imageUrl: e.target.value })} />
                    </div>
                  </div>
                )}
              />
            </div>
          </TabsContent>

          {/* Curriculum */}
          <TabsContent value="curriculum" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">The 24-Month Journey (Curriculum)</h2>
            <ReorderableList<CurriculumSemester>
              items={content.curriculum}
              onItemsChange={(items) => setContent(prev => ({ ...prev, curriculum: items }))}
              defaultNewItem={() => ({ id: generateId(), title: '', topics: [] })}
              addButtonText="Add Semester"
              renderItem={(item, index, updateItem) => (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Semester Title</Label>
                    <Input value={item.title} onChange={(e) => updateItem({ ...item, title: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Topics (comma separated)</Label>
                    <Textarea 
                      value={item.topics.join(', ')} 
                      onChange={(e) => updateItem({ ...item, topics: e.target.value.split(',').map(s => s.trim()) })} 
                      placeholder="e.g. Microeconomics, Finance, Construction Tech"
                    />
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* Schedule */}
          <TabsContent value="schedule" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Daily Schedule</h2>
            <ReorderableList<ScheduleItem>
              items={content.schedule}
              onItemsChange={(items) => setContent(prev => ({ ...prev, schedule: items }))}
              defaultNewItem={() => ({ id: generateId(), time: '', activity: '' })}
              addButtonText="Add Schedule Item"
              renderItem={(item, index, updateItem) => (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Time (e.g., 08:00 AM)</Label>
                    <Input value={item.time} onChange={(e) => updateItem({ ...item, time: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Activity</Label>
                    <Input value={item.activity} onChange={(e) => updateItem({ ...item, activity: e.target.value })} />
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* Pillars */}
          <TabsContent value="pillars" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">The Program (Pillars)</h2>
            <ReorderableList<Pillar>
              items={content.pillars}
              onItemsChange={(items) => setContent(prev => ({ ...prev, pillars: items }))}
              defaultNewItem={() => ({ id: generateId(), title: '', description: '' })}
              addButtonText="Add Pillar"
              renderItem={(item, index, updateItem) => (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Pillar Title</Label>
                    <Input value={item.title} onChange={(e) => updateItem({ ...item, title: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea value={item.description} onChange={(e) => updateItem({ ...item, description: e.target.value })} />
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* Outcomes */}
          <TabsContent value="outcomes" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Job Outcomes</h2>
            <ReorderableList<Outcome>
              items={content.outcomes}
              onItemsChange={(items) => setContent(prev => ({ ...prev, outcomes: items }))}
              defaultNewItem={() => ({ id: generateId(), role: '', salary: '' })}
              addButtonText="Add Outcome"
              renderItem={(item, index, updateItem) => (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Input value={item.role} onChange={(e) => updateItem({ ...item, role: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Salary / Outcome</Label>
                    <Input value={item.salary} onChange={(e) => updateItem({ ...item, salary: e.target.value })} />
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* Testimonials */}
          <TabsContent value="testimonials" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Testimonials & Industry Voices</h2>
            <ReorderableList<Testimonial>
              items={content.testimonials}
              onItemsChange={(items) => setContent(prev => ({ ...prev, testimonials: items }))}
              defaultNewItem={() => ({ id: generateId(), quote: '', name: '', cohort: '' })}
              addButtonText="Add Testimonial"
              renderItem={(item, index, updateItem) => (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Quote</Label>
                    <Textarea value={item.quote} onChange={(e) => updateItem({ ...item, quote: e.target.value })} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input value={item.name} onChange={(e) => updateItem({ ...item, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Cohort / Title</Label>
                      <Input value={item.cohort} onChange={(e) => updateItem({ ...item, cohort: e.target.value })} />
                    </div>
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* Admissions */}
          <TabsContent value="admissions" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Admissions Process</h2>
            <ReorderableList<AdmissionsStep>
              items={content.admissions}
              onItemsChange={(items) => setContent(prev => ({ ...prev, admissions: items }))}
              defaultNewItem={() => ({ id: generateId(), title: '', description: '' })}
              addButtonText="Add Step"
              renderItem={(item, index, updateItem) => (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Step Title</Label>
                    <Input value={item.title} onChange={(e) => updateItem({ ...item, title: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea value={item.description} onChange={(e) => updateItem({ ...item, description: e.target.value })} />
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* Blogs */}
          <TabsContent value="blogs" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">PropTech Blogs</h2>
            <ReorderableList<BlogPost>
              items={content.blogs}
              onItemsChange={(items) => setContent(prev => ({ ...prev, blogs: items }))}
              defaultNewItem={() => ({ id: generateId(), title: '', category: '', snippet: '', imageUrl: '', link: '' })}
              addButtonText="Add Blog Post"
              renderItem={(item, index, updateItem) => (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input value={item.title} onChange={(e) => updateItem({ ...item, title: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Input value={item.category} onChange={(e) => updateItem({ ...item, category: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Snippet</Label>
                    <Textarea value={item.snippet} onChange={(e) => updateItem({ ...item, snippet: e.target.value })} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Image URL</Label>
                      <Input value={item.imageUrl} onChange={(e) => updateItem({ ...item, imageUrl: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label>Link URL</Label>
                      <Input value={item.link} onChange={(e) => updateItem({ ...item, link: e.target.value })} />
                    </div>
                  </div>
                </div>
              )}
            />
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq" className="mt-0">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <ReorderableList<FAQ>
              items={content.faqs}
              onItemsChange={(items) => setContent(prev => ({ ...prev, faqs: items }))}
              defaultNewItem={() => ({ id: generateId(), question: '', answer: '' })}
              addButtonText="Add FAQ"
              renderItem={(item, index, updateItem) => (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Question</Label>
                    <Input value={item.question} onChange={(e) => updateItem({ ...item, question: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Answer</Label>
                    <Textarea value={item.answer} onChange={(e) => updateItem({ ...item, answer: e.target.value })} />
                  </div>
                </div>
              )}
            />
          </TabsContent>

        </div>
      </Tabs>
    </div>
  );
}
