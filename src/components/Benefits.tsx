import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cloud, 
  Code2, 
  Terminal, 
  FileCode, 
  RefreshCw 
} from 'lucide-react';

const codeExamples = [
  {
    title: 'Azure Integration',
    icon: <Cloud size={20} />,
    description: 'XrmBedrock provides strong typing and compile-time checks between Azure Functions and Dataverse, ensuring type safety while maintaining loose runtime coupling. This means you catch errors early in development rather than in production.',
    benefits: [
      'Low runtime coupling between services through queues',
      'Tight compile-time coupling of queue names and messages through shared types',
      'Enable idempotent patterns with custom apis'
    ],
    code: `// Shared types for Azure and Dataverse
public record CreateInvoicesMessage(DateTime End, Guid InvoiceCollectionId);
    
public static class QueueNames
{
  public const string CreateInvoicesQueue = "createinvoicesqueue";
}

// Send message to Azure queue from Plugin
azureService.SendCreateInvoicesMessage(
  new SharedDomain.EconomyArea.CreateInvoicesMessage(target.mgs_InvoiceUntil.Value, target.Id));

// Receive message from Azure queue in Azure Function
[Function(nameof(CreateInvoices))]
public Task Run([QueueTrigger(QueueNames.CreateInvoicesQueue)] CreateInvoicesMessage message)`
  },
  {
    title: 'Modern .NET Development',
    icon: <Code2 size={20} />,
    description: 'Write Dataverse plugins using modern .NET patterns and practices, even though they run on .NET Framework. XrmBedrock brings dependency injection, modern testing patterns, and clean architecture to your Dataverse development.',
    benefits: [
      'Modern testing patterns and mocking',
      'Clean architecture principles',
      'Separation of concerns'
    ],
    code: `// Plugin using dependency injection
public class TransactionService : ITransactionService
{
  private readonly IPluginExecutionContext context;
  private readonly IAdminDataverseAccessObjectService adminDao;

  public TransactionService(
      IPluginExecutionContext context,
      IAdminDataverseAccessObjectService adminDao)
  {
      this.context = context;
      this.adminDao = adminDao;
  }

  public void CreateTransactionsFromPayload()
  {
      // Get request object from the Plugin Context
      var request = context.GetRequest<CreateTransactionsRequest>();

      // Retrieve subscription related to the request
      var subscription = adminDao.Retrieve<mgs_Subscription>(
        request.SubscriptionId, 
        x => x.mgs_InvoicedUntil, 
        x => x.mgs_EndDate, 
        x => x.mgs_Product, 
        x => x.mgs_StartDate);
  }
}`
  },
  {
    title: 'Local Testing & Debugging',
    icon: <Terminal size={20} />,
    description: 'Test and debug your entire solution locally, including Azure Functions and Dataverse plugins working together. No more deploying to test environments just to debug integration scenarios.',
    benefits: [
      'Local debugging of Azure Functions',
      'Plugin debugging without deployment',
      'Integrated testing of cross-service flows',
      'Fast feedback loop for development'
    ],
    code: `// Integration test with local Dataverse and Azure emulation
// Create an invoice collection using the producer with default values
var invoiceCollection = Producer.ProduceValidInvoiceCollection(null);

// Trigger plugin that sends message to Azure
AdminDao.Update(new mgs_InvoiceCollection(invoiceCollection.Id)
{
    statuscode = mgs_InvoiceCollection_statuscode.CreateInvoices,
});

// Send messages to Azure
await MessageExecutor.SendMessages();

// Assert that the invoice collection status is updated from Azure
var retrievedInvoiceCollection = 
  AdminDao.Retrieve<mgs_InvoiceCollection>(invoiceCollection.Id, x => x.statuscode);
retrievedInvoiceCollection.statuscode
  .Should().Be(mgs_InvoiceCollection_statuscode.InvoicesCreated);`
  },
  {
    title: 'Automatic Registration',
    icon: <RefreshCw size={20} />,
    description: 'Eliminate manual plugin registration and web resource uploads. XrmBedrock automatically handles all registration tasks based on your code, ensuring consistency between source code and the development environment.',
    benefits: [
      'Automated plugin and custom api registration',
      'Automated web resource deployment',
      'Version-controlled configuration'
    ],
    code: `// Plugin Registration
public class InvoiceCollectionStatusChange : Plugin
{
    public InvoiceCollectionStatusChange()
    {
        RegisterPluginStep<mgs_InvoiceCollection>(
            EventOperation.Update,
            ExecutionStage.PostOperation,
            provider => 
              provider.GetRequiredService<IInvoiceCollectionService>().HandleStatusChange())
        .AddImage(ImageType.PostImage)
        .AddFilteredAttributes(
            x => x.statuscode);
    }
}
    
// Custom Api registration
public class CreateTransactions : CustomAPI
{
    public CreateTransactions()
    {
        RegisterCustomAPI(
          "CreateTransactions", 
          provider => 
            provider.GetRequiredService<ITransactionService>().CreateTransactionsFromPayload())
          .AddRequestParameter(
            new CustomAPIConfig.CustomAPIRequestParameter(
              "Payload", 
              RequestParameterType.String));
    }
}`
  },
  {
    title: 'Environment Typings',
    icon: <FileCode size={20} />,
    description: 'Enjoy environment-specific Typescript typings for your Dataverse environment. Generated based on your Dataverse solution, these typings provide intellisense and type safety for your Dataverse development.',
    benefits: [
      'Typescript types specific for your Dataverse environment',
      'Intellisense for Dataverse web resources',
      'Type safe queries and operations'
    ],
    code: `// Form specific types
namespace subscription {
  let formContext: Form.mgs_subscription.Main.Information;

  export function onLoad(context: Xrm.ExecutionContext<any, any>) {
    formContext = context.getFormContext() as Form.mgs_subscription.Main.Information;
    ...
  }
}
  
// Typesafe queries
let transactions = await XrmQuery.retrieveMultiple(x => x.mgs_transactions)
  .filter(x => Filter.equals(x.mgs_subscription, formContext.data.entity.getId()))
  .select(x => [x.mgs_name])
  .promise()`
  }
];

const Benefits: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedExample, setSelectedExample] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedExample((current) => (current + 1) % codeExamples.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="benefits" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core Features in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-slate-300">
            See how XrmBedrock transforms your Dataverse development experience with these practical examples.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 max-w-7xl mx-auto">
          {/* Left side: Feature description */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
              {codeExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExample(index)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex flex-col items-center gap-2 ${
                    selectedExample === index
                      ? 'bg-primary-600 text-white scale-105'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <motion.div
                    animate={{ 
                      scale: selectedExample === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {example.icon}
                  </motion.div>
                  <span className="text-center text-xs">{example.title}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedExample}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800 rounded-xl p-6 relative"
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 15, ease: "linear" }}
                />
                <h3 className="text-2xl font-bold mb-4">{codeExamples[selectedExample].title}</h3>
                <p className="text-slate-300 mb-6">{codeExamples[selectedExample].description}</p>
                
                <h4 className="text-lg font-semibold mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {codeExamples[selectedExample].benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-slate-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side: Code example */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`code-${selectedExample}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="code-window"
            >
              <div className="code-header">
                <div className="code-dot bg-red-500"></div>
                <div className="code-dot bg-yellow-500"></div>
                <div className="code-dot bg-green-500"></div>
                <span className="ml-2 text-sm text-slate-300">Example.cs</span>
              </div>
              <div className="code-content">
                <pre className="overflow-x-auto">
                  <code className="text-sm font-mono text-slate-300 whitespace-pre">
                    {codeExamples[selectedExample].code}
                  </code>
                </pre>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Benefits;