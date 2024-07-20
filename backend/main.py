from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

#Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
    )

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class PipelineData(BaseModel):
    nodes: list
    edges: list

# @app.post('/pipelines/parse')
# def parse_pipeline(pipeline: str = Form(...)):

#     return {'status': 'parsed'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    degrees = {}

    stack = []

    for edge in pipeline.edges:
        if edge["target"] in degrees:
            degrees[edge["target"]] += 1
        else:
            degrees[edge["target"]] = 1

    for node in pipeline.nodes:
        if node["id"] not in degrees:
            stack.append(node["id"])

    
    while len(stack) > 0 :
        #get first element of stack
        currentNode = stack.pop(0)

        #find the connections of that node in edges
        for edge in pipeline.edges:
            if currentNode == edge["source"]:
                connection = edge["target"]
                print(connection)
                degrees[connection] -= 1
                if degrees[connection] == 0:
                    stack.append(edge["target"])

    dag = True
    print('After while loop')
    print('degrees', degrees)
    print('stack', stack)

    #loop through
    for connection in degrees.values():
        if connection > 0:
            dag = False
            break

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': dag}

